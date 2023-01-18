#set(PATCH ${PROJECT_SOURCE_DIR}/patches/cutlass/41_fused_multi_head_atten_BMHK.patch)
include(FetchContent)
FetchContent_Declare(cutlass
  GIT_REPOSITORY https://github.com/nvidia/cutlass.git
  GIT_TAG        8b42e751c63ba219755c8ed91af5f6ec1ecc1ee6
  #PATCH_COMMAND  git apply --ignore-space-change --ignore-whitespace --whitespace=nowarn ${PATCH}
)

FetchContent_GetProperties(cutlass)
if(NOT cutlass_POPULATED)
  FetchContent_Populate(cutlass)

  #add_subdirectory(${cutlass_SOURCE_DIR} ${cutlass_BINARY_DIR} EXCLUDE_FROM_ALL)
  # target_include_directories(onnxruntime_cutlass_includes PRIVATE
  #   ${cutlass_SOURCE_DIR}/include
  #   ${cutlass_SOURCE_DIR}/examples)
endif()
