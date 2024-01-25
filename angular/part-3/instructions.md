# Part 3 instructions

Let's get started building our first example page.

For this exercise you can either continue where you left off with part 2 or use the conference-app monorepo in this folder to get started.

## Create an example page

The first library we want to create an example page for is the `header` library. Our example page is going to be a generated app by nx standards but we will place these in an examples folder to differentiate them from our main app.

```
npx nx g @nx/angular:app example-header --directory=examples/header --routing=false --e2eTestRunner=none --projectNameAndRootFormat=as-provided --bundler=esbuild
```

For the options select:

- Server-Side Rendering: false

Now we can run our example page by serving it:

```
npx nx serve example-header
```

## Filling the example

Now that we have an example app, it's time to create our example page where we can improve our development process.

Start by adding the `header.component.ts` containing some mock data:

```tsx
import { Component } from '@angular/core';
import { User, AchievementSummary } from "@conference-app/shared-models";
import { HeaderComponent } from "@conference-app/header";

@Component({
  standalone: true,
  imports: [HeaderComponent],
  selector: 'conference-app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'example-header';

  public userInfo: User = {id: 10, name: "John Doe", profileImage: "https://picsum.photos/150/150"};
  public summaryInfo: AchievementSummary = {completed: 2, uncompleted: 3, total: 5};
}
```

Now also add the `header.component.html`:

```html
<div>
    <app-header [achievementSummary]="summaryInfo" [user]="userInfo"></app-header>
</div>
```

## Start your example

You can now serve your new example app by running the following command:

```
npx nx serve example-header
```

## Changing things up

Now we can start changing our `header` component. Try to do one of these tasks:

- Change the background of the header.
- Change the color of the dougnut chart.
- Rearrange the profile image and username.

## Mocking data

Now try to create an example page with some mocking data. 

First, let's generate out a new `achievement-form` example page. You can look at the command we used for generating the `example-header` as a reference.

We're going to install `miragejs`, a library that is going to help us with the mocking.

```
npm install miragejs
```

For mocking out the creation of a new achievement here, were going to use the following code:

```ts
ngOnInit() {
  new Server({
    routes() {
      this.post('http://localhost:5001/api/appdata/achievements', (_schema, request) => {
        const achievement: SubmitAchievement = JSON.parse(request.requestBody);
        console.log(achievement);
        return {}
      })
    }
  })
}
```

Now finish up the example page for the `achievement-form`:

- Show the form on the example page.
- Add validation to all the form fields.

## More example pages

Now try to create a example page for other two libraries.

Example page `shared-UI`:

- Create a general Button component that you can use in your application.
- Try to add more colors to the `styled-container`. Create an example page where all styles are visible at one glance.

Example page `achievement-grid`:

- Play around with the styling for the grid.
- Change the look of an achievement.

