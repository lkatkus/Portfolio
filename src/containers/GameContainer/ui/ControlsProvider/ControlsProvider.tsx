import * as React from 'react';

import {
  MOVEMENT_KEYS,
  MOVEMENT_DIRECTION,
  MOVEMENT_KEY_CODES,
} from './ControlsProvider.utils';

const CHANGE_BEFORE_MOVE = 50;

const ControlsProvider: React.FC<any> = ({
  isLoaded,
  handleStateChange,
  children,
}) => {
  const touchStart = React.useRef(null);

  const handleKeyDown = (event) => {
    if (MOVEMENT_KEY_CODES.includes(event.keyCode)) {
      handleStateChange({
        isMoving: true,
        // @TODO add getDirection util?
        movingDirection: MOVEMENT_KEYS[event.key],
      });
    }
  };

  const handleStop = () => {
    handleStateChange({ isMoving: false });
  };

  const handleTouchStart = (event) => {
    touchStart.current = {
      x: event.targetTouches[0].screenX,
      y: event.targetTouches[0].screenY,
    };
  };

  const handleTouchMove = (event) => {
    let direction;

    // @TODO add getDirection util?
    const startX = touchStart.current.x;
    const startY = touchStart.current.y;
    const moveX = event.targetTouches[0].screenX;
    const moveY = event.targetTouches[0].screenY;

    const changeX = startX - moveX;
    const changeY = startY - moveY;
    const shouldMove =
      Math.abs(changeX) > CHANGE_BEFORE_MOVE ||
      Math.abs(changeY) > CHANGE_BEFORE_MOVE;

    const shouldMoveVertical = Math.abs(changeY) > Math.abs(changeX);

    if (shouldMove) {
      if (shouldMoveVertical) {
        if (startY > moveY) {
          direction = MOVEMENT_DIRECTION.up;
        } else if (startY < moveY) {
          direction = MOVEMENT_DIRECTION.down;
        }
      } else {
        if (startX > moveX) {
          direction = MOVEMENT_DIRECTION.left;
        }
        if (startX < moveX) {
          direction = MOVEMENT_DIRECTION.right;
        }
      }

      if (direction) {
        handleStateChange({
          isMoving: true,
          movingDirection: direction,
        });
      }
    }
  };

  React.useEffect(() => {
    if (isLoaded) {
      // @TODO maybe check user agent before assigning handlers
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleStop);

      document.addEventListener('touchstart', handleTouchStart);
      document.addEventListener('touchmove', handleTouchMove);
      document.addEventListener('touchend', handleStop);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleStop);

        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleStop);
      };
    }
  }, [isLoaded]);

  return children;
};

export default ControlsProvider;
