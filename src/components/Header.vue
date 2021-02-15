<template>
  <header class="section-header">
    <nav class="navbar navbar-dark navbar-expand p-0 bg-primary">
      <div class="container">
        <ul class="navbar-nav d-none d-md-flex mr-auto">
          <li class="nav-item">
            <router-link :to="{ name: 'home', params: 0 }">
              <a class="nav-link" >Home</a>
            </router-link>
            
          </li>
          
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" onclick="window.open('tel:08111070114');" class="nav-link">Call: 08111070114</a>
          </li>
          <!-- <li class="nav-item dropdown">
            <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">English</a>
            <ul class="dropdown-menu dropdown-menu-right" style="max-width: 100px;">
              <li>
                <a class="dropdown-item" href="#">Arabic</a>
              </li>
              <li>
                <a class="dropdown-item" href="#">Russian</a>
              </li>
            </ul>
          </li> -->
        </ul>
        <!-- list-inline //  -->
      </div>
      <!-- navbar-collapse .// -->
    </nav>
    <!-- header-top-light.// -->
  </header>
  <!-- section-header.// -->
</template>