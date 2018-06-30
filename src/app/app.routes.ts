import {Routes, RouterModule} from '@angular/router'
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductsPageComponent } from './pages/products-page/products-page.component';
import { Page404Component } from './pages/page404/page404.component';


const routes: Routes =[

    //home
    {
        path: '',
        component: HomePageComponent
    },

    //products
    {
        path: 'products',
        component: ProductsPageComponent
    },

    {
       path: 'products/:slug/:id',
       component: ProductPageComponent
    },

    //handing 404
    {
      path: "**",
      component: Page404Component
    },
];

export const RoutingModule = RouterModule.forRoot(routes);