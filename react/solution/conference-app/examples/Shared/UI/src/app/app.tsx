// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { StyledContainer } from '@conference-app/Shared-UI';

export function App() {
  return (
    <div>
      {[...Array(6)].map((x, i) =>
        <StyledContainer styleType={i + 1} borderRadius={6}>
          <div className={styles.ExampleBlock}>{i+1}</div>
        </StyledContainer>
      )}
    </div>
  );
}

export default App;
