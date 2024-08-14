---
title: C# API
description: C# API reference for ONNX Runtime generate() API
has_children: false
parent: API docs
grand_parent: Generate API (Preview)
nav_order: 2
---

# ONNX Runtime generate() C# API

_Note: this API is in preview and is subject to change._

{: .no_toc }

* TOC placeholder
{:toc}

## Overview

## Model class

### Constructor

```csharp
public Model(string modelPath)
```

### Generate method

```csharp
public Sequences Generate(GeneratorParams generatorParams)
```

## Tokenizer class

### Constructor

```csharp
public Tokenizer(Model model)
```

### Encode method

```csharp
public Sequences Encode(string str)
```

### Encode batch method

```csharp
public Sequences EncodeBatch(string[] strings)
```

### Decode method

```csharp
public string Decode(ReadOnlySpan<int> sequence)
```

### Decode batch method

```csharp
public string[] DecodeBatch(Sequences sequences)
```

### Create stream method

```csharp
public TokenizerStream CreateStream()
```

## TokenizerStream class

### Decode method

```csharp
public string Decode(int token)
```

## GeneratorParams class

### Constructor

```csharp
public GeneratorParams(Model model)
```

### Set search option (double)

```csharp
public void SetSearchOption(string searchOption, double value)
```

### Set search option (bool) method

```csharp
public void SetSearchOption(string searchOption, bool value)
```

### Try graph capture with max batch size

```csharp
 public void TryGraphCaptureWithMaxBatchSize(int maxBatchSize)
```

### Set input ids method

```csharp
public void SetInputIDs(ReadOnlySpan<int> inputIDs, ulong sequenceLength, ulong batchSize)
```

### Set input sequences method

```csharp
public void SetInputSequences(Sequences sequences)
```

### Set model inputs

```csharp
public void SetModelInput(string name, Tensor value)
```


## Generator class

### Constructor

```csharp
public Generator(Model model, GeneratorParams generatorParams)
```

### Is done method

```csharp
public bool IsDone()
```

### Compute logits

```csharp
public void ComputeLogits()
```

### Generate next token method

```csharp
public void GenerateNextToken()
```

### Get sequence

```csharp
public ReadOnlySpan<int> GetSequence(ulong index)
```

## Sequences class

### Num sequences member

```csharp
public ulong NumSequences { get { return _numSequences; } }
```

### [] operator

```csharp
public ReadOnlySpan<int> this[ulong sequenceIndex]
```

