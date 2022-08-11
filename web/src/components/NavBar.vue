<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <router-link class="navbar-brand" :to="{name:'home'}">King of Bots</router-link>
        <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
        <router-link class="navbar-brand" :to="{name:'pk_index'}">PK</router-link>
            </li>
            <li class="nav-item">
        <router-link class="navbar-brand" :to="{name:'record_index'}">Record</router-link>
            </li>
            <li class="nav-item">
        <router-link class="navbar-brand" :to="{name:'ranklist_index'}">Ranklist</router-link>
            </li>
        </ul>
        <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Zhiyi Wang
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">My Bot</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Log out</a></li>
          </ul>
        </li>
        </ul>
        </div>
    </div>
    </nav>
</template>

<script>

</script>

<style scoped>

</style>
