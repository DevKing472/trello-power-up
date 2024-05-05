<script setup lang="ts">
const user = useSupabaseUser()
const { auth } = useSupabaseClient()
const authsession = useSupabaseSession()

const redirectTo = `${useRuntimeConfig().public.baseUrl}`

const createEvent = async (token, providerToken) => {
    const response = await $fetch('http://localhost:4000/', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
            'provider-token': providerToken
        }
    });
}
</script>

<template>
    <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <h2 class="my-6 text-center text-3xl font-extrabold u-text-white">
            Trello Calendar sync
        </h2>
        <LoginCard v-if="!user">
            <Button class="mt-3" icon="pi pi-google" block label="Google" variant="black" @click="auth.signInWithOAuth({
            provider: 'google', options: { redirectTo, scopes: 'https://www.googleapis.com/auth/calendar' }
        })" />
        </LoginCard>
        <div v-if="authsession">
            <Button class="mt-3" block label="Create Event" variant="black"
                @click="createEvent(authsession.access_token, authsession.provider_token)" />
        </div>
    </div>
</template>