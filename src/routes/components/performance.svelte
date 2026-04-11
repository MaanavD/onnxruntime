<script>
	import Ortperf from '../../images/undraw/image_ortperf.svelte';
</script>

<section class="max-w-7xl mx-auto px-6 md:px-10 py-16 lg:py-24">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
		<div>
			<h2 class="font-display tracking-tight text-4xl lg:text-5xl">Performance</h2>
			<p class="text-xl text-base-content/70 mt-6 leading-relaxed">
				CPU, GPU, NPU - no matter what hardware you run on, ONNX Runtime optimizes for latency,
				throughput, memory utilization, and binary size. In addition to excellent out-of-the-box
				performance for common usage patterns, additional
				<a href="https://onnxruntime.ai/docs/performance/" class="text-primary hover:text-primary/80 underline"
					>model optimization techniques</a
				> and runtime configurations are available to further improve performance for specific use cases
				and models.
			</p>
		</div>
		<div class="m-auto overflow-hidden">
			<Ortperf />
		</div>
	</div>
</section>
