Front en Angular4,  construido con Angular-cli desde cero.


# Step 01: Install angular cli


```sh
$ sudo npm install -g @angular/cli

$ ng new places2go-v1
$ # ng new place2go-v1 --style scss

$ cd place2go-v1

$ ng serve --open
```

# Step #02: Edit styless.css

mean-stack-talk/Places2Go-D-Angular4/place2go-v1/src/styles.css

```css
/* You can add global styles to this file, and also import other style files */
body {
    background:url(assets/images/bg.jpg), #000;
    background-size:cover;
  }
  
  h1 {
    color: #fff;
  }
```


# Step #03: Add Bootstrap y font awesome

Bootstrap por CDN


[demo 1 bootstrap] (http://localhost:4200/assets/demo1-bootstrap/boot1.html)
[demo 2 bootstrap] (http://localhost:4200/assets/demo1-bootstrap/boot2.html)
[demo 3 bootstrap] (http://localhost:4200/assets/demo1-bootstrap/boot3.html)



```sh
npm install --save bootstrap@4.0.0-alpha.6 font-awesome


```

seguimos a https://ng-bootstrap.github.io/#/getting-started  (lo bueno es que no hay que incluir ninguna otra libreria como jquery o proper...)






# Resources

- https://www.barbarianmeetscoding.com/blog/2016/03/25/getting-started-with-angular-2-step-by-step-1-your-first-component/
- http://www.dotnetcurry.com/angularjs/1366/angular-4-app-typescript-bootstrap


NO .... - https://ng-bootstrap.github.io/#/getting-started



### Angular 

- https://www.npmjs.com/package/angular-cli  (old)
- https://www.npmjs.com/package/@angular/cli

### Links: Boostrap en Angular 4: 


- https://medium.com/@beeman/tutorial-add-bootstrap-to-angular-cli-apps-b0a652f2eb2 (Muy bueno)
- https://loiane.com/2017/08/how-to-add-bootstrap-to-an-angular-cli-project/
- https://www.youtube.com/watch?v=xGgUC2PQJ3k