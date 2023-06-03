<template>

    <Head>
        <title>Users</title>
        <meta type="description" content="User information" head-key="description">
    </Head>

    <h1 class="text-3xl">Users</h1>'

    <ul>
        <li v-for="user in users" :key="user.id" v-text="user.name"/>
    </ul>

</template>

<script setup>
defineProps({
    users: Array
});
</script>

