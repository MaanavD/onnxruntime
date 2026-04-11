<script>
	import { base } from '$app/paths';
	import Largemodeltraining from '../../images/undraw/image_largemodeltraining.svelte';
	import Ondevtraining from '../../images/undraw/image_ondevtraining.svelte';
	import Ortmobile from '../../images/undraw/image_ortmobile.svelte';
	import Ortweb from '../../images/undraw/image_ortweb.svelte';
</script>

<section class="max-w-7xl mx-auto px-6 md:px-10 py-16 lg:py-24">
	<h2 class="font-display tracking-tight text-4xl lg:text-5xl pb-3">ONNX Runtime Inferencing</h2>
	<p class="text-xl text-base-content/70 pb-6 leading-relaxed">
		ONNX Runtime powers AI in Microsoft products including Windows, Office, Azure Cognitive
		Services, and Bing, as well as in thousands of other projects across the world. ONNX Runtime is
		cross-platform, supporting cloud, edge, web, and mobile experiences.
	</p>
	<a href="./inference" class="btn btn-primary rounded-lg"
		>Learn more about ONNX Runtime Inferencing →</a
	>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
		<div class="bg-base-200 p-6 rounded-lg">
			<div class="grid xl:grid-cols-4 place-items-center gap-4">
				<div class="col-span-3 text-base-content">
					<h3 class="font-display tracking-tight text-2xl pb-2">Web Browsers</h3>
					<p class="text-lg text-base-content/70">
						Run PyTorch and other ML models in the web browser with ONNX Runtime Web.
					</p>
				</div>
				<div class="hidden xl:grid">
					<Ortweb />
				</div>
			</div>
		</div>
		<div class="bg-base-100 border border-base-300 p-6 rounded-lg">
			<div class="grid md:grid-cols-4 place-items-center gap-4">
				<div class="col-span-3 text-base-content">
					<h3 class="font-display tracking-tight text-2xl pb-2">Mobile Devices</h3>
					<p class="text-lg text-base-content/70">
						Infuse your Android and iOS mobile apps with AI using ONNX Runtime Mobile.
					</p>
				</div>
				<div class="hidden xl:grid">
					<Ortmobile />
				</div>
			</div>
		</div>
	</div>
</section>
<section class="max-w-7xl mx-auto px-6 md:px-10 pb-16 lg:pb-24">
	<h2 class="font-display tracking-tight text-4xl lg:text-5xl pb-3">ONNX Runtime Training</h2>
	<p class="text-xl text-base-content/70 pb-6 leading-relaxed">
		ONNX Runtime reduces costs for large model training and enables on-device training.
	</p>
	<a href="./training" class="btn btn-primary rounded-lg"
		>Learn more about ONNX Runtime Training →</a
	>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
		<div class="bg-base-100 border border-base-300 p-6 rounded-lg">
			<div class="grid xl:grid-cols-4 place-items-center gap-4">
				<div class="col-span-3 text-base-content">
					<h3 class="font-display tracking-tight text-2xl pb-2">Large Model Training</h3>
					<p class="text-lg text-base-content/70">
						Accelerate training of popular models, including <a
							href="https://huggingface.co/"
							class="text-primary hover:text-primary/80 underline">Hugging Face</a
						>
						models like Llama-2-7b and curated models from the
						<a href="https://ml.azure.com/" class="text-primary hover:text-primary/80 underline"
							>Azure AI | Machine Learning Studio</a
						> model catalog.
					</p>
				</div>
				<div class="hidden xl:grid">
					<Largemodeltraining />
				</div>
			</div>
		</div>
		<div class="bg-base-200 p-6 rounded-lg">
			<div class="grid md:grid-cols-4 place-items-center gap-4">
				<div class="col-span-3 text-base-content">
					<h3 class="font-display tracking-tight text-2xl pb-2">On-Device Training</h3>
					<p class="text-lg text-base-content/70">
						On-device training with ONNX Runtime lets developers take an inference model and train
						it locally to deliver a more personalized and privacy-respecting experience for
						customers.
					</p>
				</div>
				<div class="hidden xl:grid">
					<Ondevtraining />
				</div>
			</div>
		</div>
	</div>
</section>
