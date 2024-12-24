<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<style>
:root {
  --slider-connect-bg: #009688;
  --slider-tooltip-bg: #009688;

  --slider-handle-ring-color: #3b82f630;
  --slider-height: 10px;
  --slider-radius: 6px;
  --slider-handle-bg: #009688;
  --slider-handle-ring-color: #009688;

  --vc-clr-primary: #009688;
  --vc-clr-secondary: #009688;
  --vc-clr-white: #ffffff;
}

/* width */
::-webkit-scrollbar {
  width: 2px;
}


/* Handle */
::-webkit-scrollbar-thumb {
  background: #009688;
  border-radius: 2px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #009688;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>