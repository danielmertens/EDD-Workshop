# Part 2 instructions

## Creating a monorepository

Lets turn our original conference application into a monorepository.

Open your terminal in the part 2 folder and enter the following command:

```
npx create-nx-workspace@latest conference-app --preset=angular-monorepo
```

For the options select:

- name: conference-app
- bundler: esbuild
- Stylesheet format: scss
- Server-Side Rendering: No
- E2E runner: None
- distributed caching: No -> paid service if you say yes.

This created a new folder called 'conference-app' that contains our monorepository. The command also runs `npm install` so this will take a minute.

## Serve the application

```
cd conference-app
npx nx serve conference-app
```

## Import dependencies

Our original conference application has chart.js as a third party dependency. Let's add this to our monorepository.

```
npm install chart.js
```

## Create your first library

To get started let's try to integrate our `header` into our monorepo. To do this, we first create a new library:

```
npx nx g @nx/angular:lib header --directory=libs/header --unitTestRunner=jest --projectNameAndRootFormat=as-provided --buildable
```

This will create a new library called `header` in the `libs` folder. This is where our header code will live.

Now that we have our library, its time to move some code. Copy the contents of the `header` folder from the conference-app in part 1 to the lib folder of the new header library. For now, you can also copy the `models.ts` from the api folder into the headers library.

<img src="./images/Move-header-files.jpg" height="400px"/>

Lastly to fix our imports, you'll also need to move the `models.ts` from the api folder to the header library. Make sure that all the imports in the header files are ok, and then your library is finished.

## Using your library

Now that we have a library we can use it in our conference-app. Navigate to the conference-app in the apps folder of the monorepo and open the `app.component.ts` file. Here we are going to add our `header`.

We can't import components from other libraries anymore by referring to them by their file path. We need to import them from their package.

First we have to import our `header` component from the library. We can do this with the following import:

```ts
import { HeaderComponent } from '@conference-app/header';
```

All components that are exported in the `index.ts` file of the library can be imported this way.

Now we can add our `header` to the app with some dummy data.

For `app.component.ts`:
```ts
@Component({
  selector: 'conference-app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [HeaderComponent]
})
export class AppComponent {
  title = 'Conference App';
  
  public user = {
    id: 1,
    name: 'John Doe',
    profileImage: 'https://picsum.photos/150/150'
  };

  public achievementSummary = {
    total: 5,
    completed: 3,
    uncompleted: 2
  };
}
```

For `app.component.html`:
```html
<app-header [user]="user" [achievementSummary]="achievementSummary"></app-header>
```

If you now serve the app, you should be able to see the `header` in the browser with the mock data.

## Continue.

Now that we have one library, we can create other components.

## Creating libraries

Now let's split up our original application into libraries. This is how we will separate our code.

Looking at our folder structure, there are 4 obvious packages to create. `achievement-form`, `achievement-grid`, `header` and `components`. We've already created the `header` library. Let's start creating the other libraries:

```
npx nx g @nx/angular:lib achievement-form --directory=libs/achievement-form --unitTestRunner=jest --projectNameAndRootFormat=as-provided --buildable

npx nx g @nx/angular:lib achievement-grid --directory=libs/achievement-grid --unitTestRunner=jest --projectNameAndRootFormat=as-provided --buildable
```

Since `components` was meant as a folder where we will store some shared UI components, we'll move this to a shared folder.

```
npx nx g @nx/angular:lib shared-UI --directory=libs/shared/UI --unitTestRunner=jest --projectNameAndRootFormat=as-provided --buildable
```

The last thing we have to do is create a library to share some models throughout our application. This library will contain our api models that are used in multiple libraries.

```
npx nx g @nx/angular:lib shared-models --directory=libs/shared/models --unitTestRunner=jest --projectNameAndRootFormat=as-provided --buildable
```

Now we have created all 5 libraries we are going to need for our workshop. Our folder structure should look like this now:

![image](./images/Folder-structure-after-lib-creation.jpg)

## Move code

Now that we have created our libraries, we can move our code over to the monorepository.

Copy the contents of the `achievement-form` and `achievement-grid` folders in the original application to the `lib` folder of their respective libraries.

<img src="./images/Move-files.jpg" height="400px"/>

For our shared-UI library, a little more work is needed. Move the files in the `components` folder to the lib folder of shared/UI. You can delete the shared-ui folder that is inside the `lib` folder, since we won't be needing that anymore.

After this we need to make sure the components are exported. Change the `index.ts` file to export the components to the rest of the monorepository.

```typescript
export * from "./lib/modal/modal.component";
export * from "./lib/styled-container/styled-container.component"
```

The last code we need to move is our api calls and models. The models need to be moved to the shared-models library. You can throw away the `shared-models` folder that is inside of the `lib` folder. Then, you can copy over the `models.ts` file and put it inside the `lib` folder.

Export your models via the `index.ts` file to expose them to the rest of the monorepository:

```typescript
export * from './lib/models';
```

Lastly, we are going to move the `achievement-form.service.ts` to the `achievement-form` library, the `achievement-grid.service.ts` to the `achievement-grid` library and the `app.service.ts` will be moved to the conference application folder.

## Fixing imports

Now that our code is moved we still have a lot of errors in our application. This is because our imports are broken and we need to resolve our dependencies that have changed. Fix the imports in the code we copied.

## Bringing it all together

Now that our libraries are ok, we are going to bring it all together in the app. 

Copy the `app.component.ts`, `app.component.html` and `app.component.scss` files from the original application to the conference-app folder. Once you fix the imports for this file, you can serve the application using `npx nx serve conference-app`.