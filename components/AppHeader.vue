<script setup lang="ts">
const client = useSupabaseClient()
const user = useSupabaseUser()

const logout = async () => {
  await client.auth.signOut()
  navigateTo('/')
}
</script>

<template>
  <div>
    <div class="flex items-center md:justify-between justify-center">
      <div class="flex items-center">
        <Button v-if="user" class="u-text-white" variant="transparent" @click="logout">
          Logout
        </Button>
      </div>
    </div>
  </div>
</template>
