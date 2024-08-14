---
title: Build models
description: How to build models with ONNX Runtime generate() API
has_children: false
parent: How to
grand_parent: Generate API (Preview)
nav_order: 3
---

# Generate models using Model Builder
{: .no_toc }

* TOC placeholder
{:toc}

The model builder greatly accelerates creating optimized and quantized ONNX models that run with the ONNX Runtime generate() API.

## Current Support
The tool currently supports the following model architectures.

- Gemma
- LLaMA
- Mistral
- Phi

## Installation

Model builder is available as an [Olive](https://github.com/microsoft/olive) pass. It is also shipped as part of the onnxruntime-genai Python package. You can also download and run it standalone.

In any case, you need to have the following packages installed.

```bash
pip install torch transformers onnx onnxruntime
```

### Install from package

```bash
pip install --pre onnxruntime-genai
```

#### Direct download

```bash
curl https://raw.githubusercontent.com/microsoft/onnxruntime-genai/main/src/python/py/models/builder.py -o builder.py
```

### Usage

For all available options, please use the `-h/--help` flag.

```bash
# From wheel:
python3 -m onnxruntime_genai.models.builder --help

# From source:
python3 builder.py --help
```

### Original PyTorch Model from HuggingFace

This scenario is where your PyTorch model is not downloaded locally (either in the default Hugging Face cache directory or in a local folder on disk).

```bash

# From wheel:
python3 -m onnxruntime_genai.models.builder -m model_name -o path_to_output_folder -p precision -e execution_provider -c cache_dir_to_save_hf_files

# From source:
python3 builder.py -m model_name -o path_to_output_folder -p precision -e execution_provider -c cache_dir_to_save_hf_files
```

### Original PyTorch Model from Disk

This scenario is where your PyTorch model is already downloaded locally (either in the default Hugging Face cache directory or in a local folder on disk).
```
# From wheel:
python3 -m onnxruntime_genai.models.builder -m model_name -o path_to_output_folder -p precision -e execution_provider -c cache_dir_where_hf_files_are_saved

# From source:
python3 builder.py -m model_name -o path_to_output_folder -p precision -e execution_provider -c cache_dir_where_hf_files_are_saved
```

### Customized or Finetuned PyTorch Model
This scenario is where your PyTorch model has been customized or finetuned for one of the currently supported model architectures and your model can be loaded in Hugging Face.
```
# From wheel:
python3 -m onnxruntime_genai.models.builder -i path_to_local_folder_on_disk -o path_to_output_folder -p precision -e execution_provider

# From source:
python3 builder.py -i path_to_local_folder_on_disk -o path_to_output_folder -p precision -e execution_provider
```

### GGUF Model
This scenario is where your float16/float32 GGUF model is already on disk.
```
# From wheel:
python3 -m onnxruntime_genai.models.builder -m model_name -i path_to_gguf_file -o path_to_output_folder -p precision -e execution_provider -c cache_dir_for_hf_files

# From source:
python3 builder.py -m model_name -i path_to_gguf_file -o path_to_output_folder -p precision -e execution_provider -c cache_dir_for_hf_files
```

### Extra Options
This scenario is for when you want to have control over some specific settings. The below example shows how you can pass key-value arguments to `--extra_options`.
```
# From wheel:
python3 -m onnxruntime_genai.models.builder -m model_name -o path_to_output_folder -p precision -e execution_provider -c cache_dir_for_hf_files --extra_options filename=decoder.onnx

# From source:
python3 builder.py -m model_name -o path_to_output_folder -p precision -e execution_provider -c cache_dir_for_hf_files --extra_options filename=decoder.onnx
```
To see all available options through `--extra_options`, please use the `help` commands in the `Full Usage` section above.

### Config Only
This scenario is for when you already have your optimized and/or quantized ONNX model and you need to create the config files to run with ONNX Runtime generate() API.
```
# From wheel:
python3 -m onnxruntime_genai.models.builder -m model_name -o path_to_output_folder -p precision -e execution_provider -c cache_dir_for_hf_files --extra_options config_only=true

# From source:
python3 builder.py -m model_name -o path_to_output_folder -p precision -e execution_provider -c cache_dir_for_hf_files --extra_options config_only=true
```

Afterwards, please open the `genai_config.json` file in the output folder and modify the fields as needed for your model. You should store your ONNX model in the output folder as well.

### Unit Testing Models
This scenario is where your PyTorch model is already downloaded locally (either in the default Hugging Face cache directory or in a local folder on disk). If it is not already downloaded locally, here is an example of how you can download it.

```
from transformers import AutoModelForCausalLM, AutoTokenizer

model_name = "your_model_name"
cache_dir = "cache_dir_to_save_hf_files"

model = AutoModelForCausalLM.from_pretrained(model_name, cache_dir=cache_dir)
model.save_pretrained(cache_dir)

tokenizer = AutoTokenizer.from_pretrained(model_name, cache_dir=cache_dir)
tokenizer.save_pretrained(cache_dir)
```

#### Option 1: Use the model builder tool directly
This option is the simplest but it will download another copy of the PyTorch model onto disk to accommodate the change in the number of hidden layers.
```
# From wheel:
python3 -m onnxruntime_genai.models.builder -m model_name -o path_to_output_folder -p precision -e execution_provider --extra_options num_hidden_layers=4

# From source:
python3 builder.py -m model_name -o path_to_output_folder -p precision -e execution_provider --extra_options num_hidden_layers=4
```

#### Option 2: Edit the config.json file on disk and then run the model builder tool

1. Navigate to where the PyTorch model and its associated files are saved on disk.
2. Modify `num_hidden_layers` in `config.json` to your desired target (e.g. 4 layers).
3. Run the below command for the model builder tool.

```
# From wheel:
python3 -m onnxruntime_genai.models.builder -m model_name -o path_to_output_folder -p precision -e execution_provider -c cache_dir_where_hf_files_are_saved

# From source:
python3 builder.py -m model_name -o path_to_output_folder -p precision -e execution_provider -c cache_dir_where_hf_files_are_saved
```