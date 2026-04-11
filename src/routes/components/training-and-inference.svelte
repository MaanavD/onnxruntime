<script>
	import { base } from '$app/paths';
	import Largemodeltraining from '../../images/undraw/image_largemodeltraining.svelte';
	import Ondevtraining from '../../images/undraw/image_ondevtraining.svelte';
	import Ortmobile from '../../images/undraw/image_ortmobile.svelte';
	import Ortweb from '../../images/undraw/image_ortweb.svelte';
</script>

<div class="section-container section-gap">
	<div class="border-t border-base-300 pt-16 mb-16">
		<p class="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Deploy everywhere</p>
		<h2 class="mb-3">ONNX Runtime Inferencing</h2>
		<p class="text-lg text-muted max-w-2xl mb-6">
			ONNX Runtime powers AI in Microsoft products including Windows, Office, Azure Cognitive
			Services, and Bing, as well as in thousands of other projects across the world.
		</p>
		<a href="./inference" class="btn btn-primary rounded-lg">Learn more about Inferencing →</a>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
			<div class="card-surface">
				<div class="flex items-start gap-4">
					<div class="hidden xl:block shrink-0 w-16">
						<Ortweb />
					</div>
					<div>
						<h3 class="mb-2">Web Browsers</h3>
						<p class="text-muted">
							Run PyTorch and other ML models in the web browser with ONNX Runtime Web.
						</p>
					</div>
				</div>
			</div>
			<div class="card-surface">
				<div class="flex items-start gap-4">
					<div class="hidden xl:block shrink-0 w-16">
						<Ortmobile />
					</div>
					<div>
						<h3 class="mb-2">Mobile Devices</h3>
						<p class="text-muted">
							Infuse your Android and iOS mobile apps with AI using ONNX Runtime Mobile.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div>
		<p class="text-xs font-semibold uppercase tracking-widest text-primary mb-3">Scale your models</p>
		<h2 class="mb-3">ONNX Runtime Training</h2>
		<p class="text-lg text-muted max-w-2xl mb-6">
			ONNX Runtime reduces costs for large model training and enables on-device training.
		</p>
		<a href="./training" class="btn btn-primary rounded-lg">Learn more about Training →</a>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
			<div class="card-surface">
				<div class="flex items-start gap-4">
					<div class="hidden xl:block shrink-0 w-16">
						<Largemodeltraining />
					</div>
					<div>
						<h3 class="mb-2">Large Model Training</h3>
						<p class="text-muted">
							Accelerate training of popular models, including <a
								href="https://huggingface.co/"
								class="link-arrow">Hugging Face</a
							>
							models like Llama-2-7b and curated models from the
							<a href="https://ml.azure.com/" class="link-arrow">Azure AI</a> model catalog.
						</p>
					</div>
				</div>
			</div>
			<div class="card-surface">
				<div class="flex items-start gap-4">
					<div class="hidden xl:block shrink-0 w-16">
						<Ondevtraining />
					</div>
					<div>
						<h3 class="mb-2">On-Device Training</h3>
						<p class="text-muted">
							On-device training with ONNX Runtime lets developers take an inference model and train
							it locally to deliver a more personalized and privacy-respecting experience for
							customers.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
