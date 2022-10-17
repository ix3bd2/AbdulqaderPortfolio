<template>
  <nav class="navbar navbar-expand-lg navbar-default" id="NavBar">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler custom-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              ><font-awesome-icon icon="fa-solid fa-address-card" /> About</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              ><font-awesome-icon icon="fa-solid fa-brain" /> Skills</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              ><font-awesome-icon icon="fa-solid fa-graduation-cap" /> Work & Education</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#"
              ><font-awesome-icon icon="fa-solid fa-briefcase" /> Porjects</a
            >
          </li>
        </ul>
        <!-- <form class="d-flex" role="search">
          <button class="btn btn-outline-success" type="submit">
            ContacMe
          </button>
        </form> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  position: fixed !important;
  width: 100%;
  z-index: 1020;
  transition: 0.4s;
  top: 0;
}
.navbar a,
ul,
li {
  color: white !important;
}
.custom-toggler.navbar-toggler {
  border-color: white;
}
.custom-toggler .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='white' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}
</style>