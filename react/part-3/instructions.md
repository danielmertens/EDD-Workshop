# Part 3 instructions

Let's get started building our first example page.

For this exercise you can either continue where you left off with part 2 or use the conference-app monorepo in this folder to get started.

## Create an example page

The first library we want to create an example page for is the `Header` library. Our example page is going to be a generated app by nx standards but we will place these in an examples folder to differentiate them from our main app.

```
npx nx g @nx/react:app Example-Header --directory=examples/Header --routing=false --e2eTestRunner=none --projectNameAndRootFormat=as-provided
```

Now we can run our example page by serving it:

```
npx nx serve Example-Header
```

## Filling the example

Now that we have an example app, it's time to create our example page where we can improve our development process.

Start by adding the header to the example page:

```tsx
import { Header } from '@conference-app/Header';

export function App() {
  const userInfo = {id: 10, name: "John Doe", profileImage: "https://picsum.photos/150/150"};
  const summaryInfo = {completed: 2, uncompleted: 3, total: 5};

  return (
    <div>
      <Header achievementSummary={summaryInfo} user={userInfo}/>
    </div>
  );
}

export default App;
```

## Start your example

You can now serve your new example app by running the following command:

```
npx nx serve example-header
```

## Changing things up

Now we can start changing our `Header` component. Try to do one of these tasks:

- Change the background of the header.
- Change the color of the dougnut chart.
- Rearrange the profile image and username.

## Mocking data

Now try to create an example page with some mocking data. 

First, let's generate out a new `AchievementForm` example page. You can look at the command we used for generating the `Example-Header` as a reference.

We're going to install `miragejs`, a library that is going to help us with the mocking.

```
npm install miragejs
```

For mocking out the creation of a new achievement here, were going to use the following code. Paste it somewhere outside your component function.

```ts
new Server({
  routes() {
    this.post('http://localhost:5001/api/appdata/achievements', (_schema, request) => {
      const achievement: SubmitAchievement = JSON.parse(request.requestBody);
      console.log(achievement);
      return {}
    })
  }
})
```

Now finish up the example page for the `AchievementForm`:

- Show the form on the example page.
- Add validation to all the form fields.

## More example pages

Now try to create a example page for other two libraries.

Example page `Shared-UI`:

- Create a general Button component that you can use in your application.
- Try to add more colors to the `StyledContainer`. Create an example page where all styles are visible at one glance.

Example page `AchievementGrid`:

- Play around with the styling for the grid.
- Change the look of an achievement.

