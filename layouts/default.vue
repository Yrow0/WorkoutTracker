<template>
  <div class="flex items-start w-full overflow-x-hidden">
    <div class="w-64"> <!-- Sidebar avec largeur fixe -->
      <NewSidebar/>      
    </div>
    <div class="flex-grow mr-[15px] ml-[15px]"> 
      <slot />
    </div>
  </div>
</template>
