<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          
          <a class="nav-link active" aria-current="page" href="#"><font-awesome-icon icon="fa-solid fa-address-card" /> About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><font-awesome-icon icon="fa-solid fa-briefcase" /> Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><font-awesome-icon icon="fa-solid fa-briefcase" /> Porjects</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <button class="btn btn-outline-success" type="submit">ContacMe</button>
      </form>
    </div>
  </div>
</nav>

</template>

<script>
export default {

}
</script>

<style>
.navbar{
  position: fixed!important;
  width: 100%;
  z-index: 1020;
  top:0;
}

</style>