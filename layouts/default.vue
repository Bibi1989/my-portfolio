<template>
  <div class="min-h-screen bg-[#1a1f2b] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.12)_1px,transparent_0)] bg-[length:18px_18px] font-body text-slate-800">
    <SiteHeader />
    <div class="mx-auto w-full container p-3 md:p-6">
      <slot />
    </div>
    <SiteFooter />
  </div>
</template>
