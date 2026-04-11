<script>
	import Ortperf from '../../images/undraw/image_ortperf.svelte';
</script>

<div class="bg-base-200/50">
	<div class="section-container section-gap">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
			<div>
				<p class="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Optimized for speed</p>
				<h2 class="mb-4">Performance</h2>
				<p class="text-lg text-muted max-w-lg">
					CPU, GPU, NPU — no matter what hardware you run on, ONNX Runtime optimizes for latency,
					throughput, memory utilization, and binary size. In addition to excellent out-of-the-box
					performance for common usage patterns, additional
					<a href="https://onnxruntime.ai/docs/performance/" class="link-arrow"
						>model optimization techniques</a
					> and runtime configurations are available to further improve performance for specific use cases
					and models.
				</p>
			</div>
			<div class="flex justify-center">
				<Ortperf />
			</div>
		</div>
	</div>
</div>
