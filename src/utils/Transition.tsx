import React, { useRef, useEffect, useContext, createContext, RefObject } from 'react';
import { CSSTransition as ReactCSSTransition } from 'react-transition-group';

interface TransitionContextProps {
    parent: {
        show?: boolean;
        isInitialRender: boolean;
        appear?: boolean;
    };
}

const TransitionContext = createContext<TransitionContextProps>({
    parent: { isInitialRender: true },
});

function useIsInitialRender() {
  const isInitialRender = useRef(true);
  useEffect(() => {
    isInitialRender.current = false;
  }, [])
  return isInitialRender.current;
}

interface CSSTransitionProps extends React.ComponentPropsWithoutRef<'div'> {
    show?: boolean;
    enter?: string;
    enterStart?: string;
    enterEnd?: string;
    leave?: string;
    leaveStart?: string;
    leaveEnd?: string;
    appear?: boolean;
    unmountOnExit?: boolean;
    tag?: keyof HTMLElementTagNameMap;
}

function CSSTransition({
  show,
  enter = '',
  enterStart = '',
  enterEnd = '',
    leave = '',
    leaveStart = '',
    leaveEnd = '',
    appear,
    unmountOnExit,
  children,
    ...rest
}: CSSTransitionProps) {
    const enterClasses = enter.split(' ').filter((s) => s.length);
    const enterStartClasses = enterStart.split(' ').filter((s) => s.length);
    const enterEndClasses = enterEnd.split(' ').filter((s) => s.length);
    const leaveClasses = leave.split(' ').filter((s) => s.length);
    const leaveStartClasses = leaveStart.split(' ').filter((s) => s.length);
    const leaveEndClasses = leaveEnd.split(' ').filter((s) => s.length);
    const removeFromDom = unmountOnExit;

    function addClasses(node: HTMLElement, classes: string[]) {
        classes.length && node.classList.add(...classes);
    }

    function removeClasses(node: HTMLElement, classes: string[]) {
        classes.length && node.classList.remove(...classes);
    }

    const nodeRef = useRef<HTMLElement>(null);

    return (
        <ReactCSSTransition
            appear={appear}
            nodeRef={nodeRef}
            unmountOnExit={removeFromDom}
            in={show}
            addEndListener={(done) => {
                nodeRef.current?.addEventListener('transitionend', done, false);
            }}
            onEnter={() => {
                if (!removeFromDom && nodeRef.current) nodeRef.current.style.display = '';
                if (nodeRef.current) addClasses(nodeRef.current, [...enterClasses, ...enterStartClasses]);
            }}
            onEntering={() => {
                if (nodeRef.current) {
                    removeClasses(nodeRef.current, enterStartClasses);
                    addClasses(nodeRef.current, enterEndClasses);
                }
            }}
            onEntered={() => {
                if (nodeRef.current) removeClasses(nodeRef.current, [...enterEndClasses, ...enterClasses]);
            }}
            onExit={() => {
                if (nodeRef.current) addClasses(nodeRef.current, [...leaveClasses, ...leaveStartClasses]);
            }}
            onExiting={() => {
                if (nodeRef.current) {
                    removeClasses(nodeRef.current, leaveStartClasses);
                    addClasses(nodeRef.current, leaveEndClasses);
                }
            }}
            onExited={() => {
                if (nodeRef.current) removeClasses(nodeRef.current, [...leaveEndClasses, ...leaveClasses]);
                if (!removeFromDom && nodeRef.current) nodeRef.current.style.display = 'none';
            }}
        >
            {/* Use React.forwardRef to pass the ref to the underlying DOM element */}
            <div ref={nodeRef as RefObject<HTMLDivElement>} {...rest} style={{ display: !removeFromDom && !show ? 'none' : undefined }}>
                {children}
            </div>
        </ReactCSSTransition>
    );
}

interface TransitionProps extends CSSTransitionProps {
    show?: boolean;
    appear?: boolean;
}

const Transition: React.FC<TransitionProps> = ({ show, appear, ...rest }) => {
    const { parent } = useContext(TransitionContext);
    const isInitialRender = useIsInitialRender();
    const isChild = show === undefined;

    if (isChild) {
        return (
            <CSSTransition
                appear={parent.appear || !parent.isInitialRender}
                show={parent.show}
                {...rest}
            />
        );
    }

    return (
        <TransitionContext.Provider value={{ parent: { show, isInitialRender, appear } }}>
            <CSSTransition appear={appear} show={show} {...rest} />
        </TransitionContext.Provider>
    );
};

export default Transition;