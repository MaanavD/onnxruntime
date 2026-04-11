<script>
	import { base } from '$app/paths';
	import Ortgenerativeai from '../../images/undraw/image_ortgenerativeai.svelte';
</script>

<div class="section-container section-gap">
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
		<div>
			<p class="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Built for the future</p>
			<h2 class="mb-4">Generative AI</h2>
			<p class="text-lg text-muted max-w-lg mb-6">
				Integrate the power of Generative AI and Large Language Models (LLMs) in your apps and
				services with ONNX Runtime. No matter what language you develop in or what platform you need
				to run on, you can make use of state-of-the-art models for image synthesis, text generation,
				and more.
			</p>
			<a href="./generative-ai" class="btn btn-primary rounded-lg"
				>Learn more about Generative AI →</a
			>
		</div>
		<div class="flex justify-center">
			<Ortgenerativeai />
		</div>
	</div>
</div>
