<template>
  <div class="flex items-start w-full overflow-x-hidden">
    <div class="w-64"> <!-- Sidebar avec largeur fixe -->
      <Sidebar />
    </div>
    <div class="flex-grow mr-[30px]"> <!-- Ajout de marge à droite ici -->
      <slot />
    </div>
  </div>
</template>