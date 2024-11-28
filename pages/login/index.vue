<template>
  <div class="flex items-center justify-center min-h-screen">
    <div class="">
      <UiTabs default-value="login" class="w-[400px]">
        <UiTabsList class="grid w-full grid-cols-2">
          <UiTabsTrigger value="login">Login</UiTabsTrigger>
          <UiTabsTrigger value="register">Register</UiTabsTrigger>
        </UiTabsList>
        <UiTabsContent value="login">
          <UiCard>
            <UiCardHeader>
              <UiCardTitle>Se connecter</UiCardTitle>
              <UiCardDescription>
                Veuillez vous connecter ici.
              </UiCardDescription>
            </UiCardHeader>
            <UiCardContent class="space-y-2">
              <div class="space-y-1">
                <UiLabel for="name">Nom d'utilisateur</UiLabel>
                <UiInput id="name"/>
              </div>
              <div class="space-y-1">
                <UiLabel for="username">Mot de passe</UiLabel>
                <UiInput id="username" />
              </div>
            </UiCardContent>
            <UiCardFooter>
              <UiButton>Se connecter</UiButton>
            </UiCardFooter>
          </UiCard>
        </UiTabsContent>
        <UiTabsContent value="register">
          <form @submit="onSubmit">
            <UiCard>
              <UiCardHeader>
                <UiCardTitle>Créer un compte</UiCardTitle>
                <UiCardDescription>
                  Veuillez vous enregistrer ici.
                </UiCardDescription>
              </UiCardHeader>

              <UiCardContent class="space-y-2">
                <div class="space-y-1">
                  <FormField v-slot="{ componentField }" name="username">
                    <FormItem>
                      <FormLabel>Nom d'utilisateur</FormLabel>
                      <FormControl>
                          <Input type="text" placeholder="John Doe" v-bind="componentField" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </FormField>
                </div>
                <div class="space-y-1">
                  <FormField v-slot="{ componentField }" name="email">
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                          <Input type="text" placeholder="Johndoe@email.com" v-bind="componentField" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </FormField>
                </div>
                <div class="space-y-1">
                  <FormField v-slot="{ componentField }" name="password">
                    <FormItem>
                      <FormLabel>Mot de passe</FormLabel>
                      <FormControl>
                          <Input type="text" placeholder="******" v-bind="componentField" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  </FormField>
                </div>
                
                
              </UiCardContent>
              <UiCardFooter>
                <UiButton type="submit">Créer un compte</UiButton>
              </UiCardFooter>
            </UiCard>
          </form>
        </UiTabsContent>
      </UiTabs>
    </div>
  </div>
</template>


<script lang="ts" setup>
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate';
import * as z from 'zod'
import { FormField } from '~/components/ui/form';
import FormControl from '~/components/ui/form/FormControl.vue';
import FormItem from '~/components/ui/form/FormItem.vue';
import FormLabel from '~/components/ui/form/FormLabel.vue';
import FormMessage from '~/components/ui/form/FormMessage.vue';
import Input from '~/components/ui/input/Input.vue';

definePageMeta({
    layout: "auth"
})
const {
  signUp,
  signIn,
} = useAuth()

const formSchema = toTypedSchema(z.object({
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password : z.string().regex(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/),
}))

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit((values) => {
  handleSignUp(values.username, values.email, values.password)
  console.log('Form submitted!', values)
})

async function handleSignIn() {
  console.log("test");
  await signIn({});
}

async function handleSignUp(username:string, email:string, password:string)
{
  console.log("username:" + username)
  await signUp({UserName: username, Email: email, Password: password });
}







// const credentials = { Email: "anto28700@gmail.com", Password: "j'ablpdV" }
// const loggedin = computed(() => status.value === 'authenticated')

</script>
