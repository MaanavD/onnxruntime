<script>
	import { base } from '$app/paths';
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaYoutube from 'svelte-icons/fa/FaYoutube.svelte';
	import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte';
	import OnnxLight from '../../images/ONNX-Light.svelte';
	export let pathvar = '.';
	onMount(() => {
		themeChange(false);
	});

	let innerHeight = 0;
	let innerWidth = 0;
	$: smallWindowHeight = innerHeight <= 360;
	$: smallWindowWidth = innerWidth <= 360;
</script>

<svelte:window bind:innerHeight bind:innerWidth />
<nav
	class="navbar bg-base-100/95 backdrop-blur-sm top-0 z-50 border-b border-base-300/50 px-4 lg:px-8 {smallWindowHeight ? '' : 'sticky'}"
	role="navigation"
>
	<div class="navbar-start gap-2">
		<!-- Mobile hamburger dropdown -->
		<div class="dropdown">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<label tabindex="0" class="btn btn-ghost btn-sm lg:hidden p-1.5 hover:bg-base-200 transition-colors duration-200">
				<svg
					xmlns="https://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						d="M4 6h16M4 12h8m-8 6h16"
					/></svg
				>
			</label>
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<ul
				tabindex="0"
				class="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow-lg bg-base-100 rounded-xl w-56 border border-base-300/50 font-body"
			>
				<li>
					<a class="rounded-lg hover:bg-base-200 focus:bg-base-200 transition-colors duration-200" href={pathvar + '/getting-started'}>Get Started</a>
				</li>
				<li>
					<a class="rounded-lg hover:bg-base-200 focus:bg-base-200 transition-colors duration-200" href={pathvar + '/blogs'}>Blogs</a>
				</li>
				<li>
					<a class="rounded-lg hover:bg-base-200 focus:bg-base-200 transition-colors duration-200" rel="external" href={pathvar + '/docs'}>Docs</a>
				</li>
				<li>
					<details>
						<summary class="rounded-lg hover:bg-base-200 focus:bg-base-200 transition-colors duration-200">Community</summary>
						<ul class="p-1">
							<li><a class="rounded-lg hover:bg-base-200 transition-colors duration-200" href={pathvar + '/models'}>Models</a></li>
							<li><a class="rounded-lg hover:bg-base-200 transition-colors duration-200" href={pathvar + '/roadmap'}>Roadmap</a></li>
							<li><a class="rounded-lg hover:bg-base-200 transition-colors duration-200" href={pathvar + '/events'}>Events</a></li>
							<li><a class="rounded-lg hover:bg-base-200 transition-colors duration-200" href={pathvar + '/testimonials'}>Testimonials</a></li>
							<li>
								<a class="rounded-lg hover:bg-base-200 transition-colors duration-200" href="https://www.youtube.com/onnxruntime" target="_blank">
									<span class="w-3.5 h-3.5 inline-block"><FaYoutube /></span>Youtube
								</a>
							</li>
							<li>
								<a class="rounded-lg hover:bg-base-200 transition-colors duration-200" href="https://www.linkedin.com/company/onnxruntime/" target="_blank">
									<span class="w-3.5 h-3.5 inline-block"><FaLinkedinIn /></span>LinkedIn
								</a>
							</li>
						</ul>
					</details>
				</li>
				<li>
					<a class="rounded-lg hover:bg-base-200 focus:bg-base-200 transition-colors duration-200" href="https://github.com/microsoft/onnxruntime" target="_blank">
						<span class="w-3.5 h-3.5 inline-block"><FaGithub /></span>GitHub
					</a>
				</li>
			</ul>
		</div>

		<a
			class="flex items-center gap-2 font-display font-semibold tracking-tight text-lg text-base-content hover:opacity-80 transition-opacity duration-200"
			href={pathvar + '/'}
		>
			<OnnxLight width={28} height={28} />
			<span>{smallWindowWidth ? 'ORT' : 'ONNX Runtime'}</span>
		</a>

		<a
			class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-16 focus:z-50 focus:px-4 focus:py-2 focus:bg-base-100 focus:rounded-lg focus:shadow-lg font-body"
			href="#main-content">Skip to main content</a
		>
	</div>

	<!-- Desktop navigation -->
	<div class="navbar-center hidden lg:flex">
		<ul class="flex items-center gap-1 font-body text-sm">
			<li>
				<a
					class="px-3 py-2 rounded-lg text-base-content/70 hover:text-base-content hover:bg-base-200/60 transition-colors duration-200"
					href={pathvar + '/getting-started'}>Get Started</a
				>
			</li>
			<li>
				<a
					class="px-3 py-2 rounded-lg text-base-content/70 hover:text-base-content hover:bg-base-200/60 transition-colors duration-200"
					href={pathvar + '/blogs'}>Blogs</a
				>
			</li>
			<li>
				<a
					class="px-3 py-2 rounded-lg text-base-content/70 hover:text-base-content hover:bg-base-200/60 transition-colors duration-200"
					rel="external"
					href={pathvar + '/docs'}>Docs</a
				>
			</li>
			<li class="dropdown dropdown-hover">
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<label
					tabindex="0"
					class="px-3 py-2 rounded-lg text-base-content/70 hover:text-base-content hover:bg-base-200/60 transition-colors duration-200 cursor-pointer flex items-center gap-1"
				>
					Community
					<svg class="w-3.5 h-3.5 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
						<path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7" />
					</svg>
				</label>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow-lg bg-base-100 rounded-xl w-48 border border-base-300/50 mt-2">
					<li><a class="rounded-lg hover:bg-base-200 transition-colors duration-200" href={pathvar + '/models'}>Models</a></li>
					<li><a class="rounded-lg hover:bg-base-200 transition-colors duration-200" href={pathvar + '/roadmap'}>Roadmap</a></li>
					<li><a class="rounded-lg hover:bg-base-200 transition-colors duration-200" href={pathvar + '/events'}>Events</a></li>
					<li><a class="rounded-lg hover:bg-base-200 transition-colors duration-200" href={pathvar + '/testimonials'}>Testimonials</a></li>
					<li class="border-t border-base-300/50 mt-1 pt-1">
						<a class="rounded-lg hover:bg-base-200 transition-colors duration-200 flex items-center gap-2" href="https://www.youtube.com/onnxruntime" target="_blank">
							<span class="w-3.5 h-3.5"><FaYoutube /></span>Youtube
						</a>
					</li>
					<li>
						<a class="rounded-lg hover:bg-base-200 transition-colors duration-200 flex items-center gap-2" href="https://www.linkedin.com/company/onnxruntime/" target="_blank">
							<span class="w-3.5 h-3.5"><FaLinkedinIn /></span>LinkedIn
						</a>
					</li>
				</ul>
			</li>
			<li>
				<a
					class="px-3 py-2 rounded-lg text-base-content/70 hover:text-base-content hover:bg-base-200/60 transition-colors duration-200 flex items-center gap-1.5"
					href="https://github.com/microsoft/onnxruntime"
					target="_blank"
					><span class="w-4 h-4"><FaGithub /></span>GitHub</a
				>
			</li>
		</ul>
	</div>

	<div class="navbar-end">
		<label class="cursor-pointer grid place-items-center opacity-60 hover:opacity-100 transition-opacity duration-200">
			<input
				aria-label="toggle color theme"
				data-toggle-theme="lightmode, darkmode"
				type="checkbox"
				class="toggle toggle-sm row-start-1 col-start-1 col-span-2 bg-base-content border-base-content/20 rounded-full"
				checked
				id="colortoggle"
			/><svg
				class="col-start-1 row-start-1 stroke-base-100 fill-base-100"
				xmlns="https://www.w3.org/2000/svg"
				width="12"
				height="12"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				><circle cx="12" cy="12" r="5" /><path
					d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"
				/></svg
			>
			<svg
				class="col-start-2 row-start-1 stroke-base-100 fill-base-100"
				xmlns="https://www.w3.org/2000/svg"
				width="12"
				height="12"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg
			>
		</label>
	</div>
</nav>
