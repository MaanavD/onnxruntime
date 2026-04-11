<script>
	import { base } from '$app/paths';
	import Ortgenerativeai from '../../images/undraw/image_ortgenerativeai.svelte';
</script>

<section class="max-w-7xl mx-auto px-6 md:px-10 py-16 lg:py-24">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
		<div>
			<h2 class="font-display tracking-tight text-4xl lg:text-5xl">Generative AI</h2>
			<p class="text-xl text-base-content/70 mt-6 leading-relaxed">
				Integrate the power of Generative AI and Large language Models (LLMs) in your apps and
				services with ONNX Runtime. No matter what language you develop in or what platform you need
				to run on, you can make use of state-of-the-art models for image synthesis, text generation,
				and more.
			</p>
			<a href="./generative-ai" class="btn btn-outline rounded-lg mt-8"
				>Learn more about ONNX Runtime & Generative AI →</a
			>
		</div>
		<div class="m-auto overflow-hidden">
			<Ortgenerativeai />
		</div>
	</div>
</section>
