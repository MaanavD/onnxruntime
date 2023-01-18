set(cutlass_URL https://github.com/nvidia/cutlass.git)
set(cutlass_TAG 8b42e751c63ba219755c8ed91af5f6ec1ecc1ee6)

set(PATCH ${PROJECT_SOURCE_DIR}/patches/cutlass/41_fused_multi_head_atten_BMHK.patch)

include(FetchContent)
FetchContent_Declare(cutlass
  GIT_REPOSITORY ${cutlass_URL}
  GIT_TAG        ${cutlass_TAG}
  PATCH_COMMAND  git apply --reverse --check ${PATCH} || git apply --ignore-space-change --ignore-whitespace ${PATCH}
)

FetchContent_GetProperties(cutlass)
if(NOT cutlass_POPULATED)
  FetchContent_Populate(cutlass)

  target_include_directories(onnxruntime_cutlass_includes INTERFACE
    ${cutlass_SOURCE_DIR}/include
    ${cutlass_SOURCE_DIR}/examples)
endif()
