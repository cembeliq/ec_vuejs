<template>
  <nav class="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
    <div class="container">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#main_nav"
        aria-controls="main_nav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="main_nav">
        <ul class="navbar-nav">
          
          <li class="nav-item"  :class="{active:index == currentIndex}"
                    v-for="(category, index) in categories"
                    :key="index"
                    @click="setActiveCategory(category, index)"  
                ><a class="nav-link" :href="'/categories/' + category.slug" >{{ category.name }}</a>
          </li>
          
        </ul>
      </div>
      <!-- collapse .// -->
    </div>
    <!-- container .// -->
  </nav>
</template>

<script>
import CategoryDataService from "../../services/CategoryDataService";

export default {
    name: "category",
    data(){
        return{
            categories: [],
            currentCategory: null,
            currentIndex: -1
        }
        
    },
    methods:{
        retrieveCategories(){
            CategoryDataService.getAll()
                .then(response => {
                    this.categories = response.data;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        setActiveCategory(category, index){
            this.currentCategory = category;
            this.currentIndex = index;

        }
    },
    mounted(){
        this.retrieveCategories();
    }

};
</script>