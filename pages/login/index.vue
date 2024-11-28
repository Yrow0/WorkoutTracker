<template>
  <div class="m-0 w-80">
    <UiTabs default-value="login" class="w-[400px]">
      <UiTabsList class="grid w-full grid-cols-2">
      <UiTabsTrigger value="login">
        Login
      </UiTabsTrigger>
      <UiTabsTrigger value="register">
        Regiser
      </UiTabsTrigger>
    </UiTabsList>
    <UiTabsContent value="login">
    <UiCard>
        <UiCardHeader>
          <UiCardTitle>Login</UiCardTitle>
          <UiCardDescription>
            Veuillez vous connecter ici.
          </UiCardDescription>
        </UiCardHeader>
        <UiCardContent class="space-y-2">
          <div class="space-y-1">
            <UiLabel for="name">Name</UiLabel>
            <UiInput id="name" default-value="Pedro Duarte" />
          </div>
          <div class="space-y-1">
            <UiLabel for="username">Username</UiLabel>
            <UiInput id="username" default-value="@peduarte" />
          </div>
        </UiCardContent>
        <UiCardFooter>
          <UiButton>Save changes</UiButton>
        </UiCardFooter>
    </UiCard>
  </UiTabsContent>
  <UiTabsContent value="register">
    <UiCard>
        <UiCardHeader>
          <UiCardTitle>Register</UiCardTitle>
          <UiCardDescription>
            Veuillez vous enregistrer ici.
          </UiCardDescription>
        </UiCardHeader>
        <UiCardContent class="space-y-2">
          <div class="space-y-1">
            <UiLabel for="name">Name</UiLabel>
            <UiInput id="name" default-value="Pedro Duarte" />
          </div>
          <div class="space-y-1">
            <UiLabel for="username">Username</UiLabel>
            <UiInput id="username" default-value="@peduarte" />
          </div>
        </UiCardContent>
        <UiCardFooter>
          <UiButton>Save changes</UiButton>
        </UiCardFooter>
    </UiCard>
  </UiTabsContent>

    </UiTabs>
  </div>
</template>

<script lang="ts" setup>


definePageMeta({
    layout: "auth"
})

const credentials = { Email: "anto28700@gmail.com", Password: "j'ablpdV" }

const {
  status,
  data,
  lastRefreshedAt,
  token,
  refreshToken,
  getSession,
  signUp,
  signIn,
  signOut,
  refresh
} = useAuth()

const loggedin = computed(() => status.value === 'authenticated')

async function handleSignIn() {
  console.log("test");
  await signIn(credentials);
}
</script>
