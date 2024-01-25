import styles from "./StyledContainer.module.scss";
import classNames from "classnames";

export interface StyledContainerProps {
    styleType: number;
    borderRadius?: number;
    children: React.ReactNode;
}

export function StyledContainer(props: StyledContainerProps) {
    const styleType = styles[`type${props.styleType}`];

    return (
        <div className={classNames(styles.styledContainer, styleType)}
            style={{ borderRadius: props.borderRadius }}>
            {props.children}
        </div>
    );
}