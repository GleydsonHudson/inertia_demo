<template>

    <Head>
        <title>Users</title>
        <meta type="description" content="User information" head-key="description">
    </Head>

    <h1 class="text-3xl">Users</h1>

    <div style="margin-top: 600px;">
        <p>The current time is {{ time }}.</p>

        <Link href="/users" class="text-blue-500" preserve-scroll>Refresh</Link>
    </div>
</template>

<script>
import {Link} from "@inertiajs/vue3";

export default {
    components: {Link},

    props: {time: String}
}
</script>

