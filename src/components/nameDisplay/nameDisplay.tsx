import * as React from 'react';

export const NameDisplayComponent = (props: {userName : string}) => {
  return (
    <div>
      <span>Name: {props.userName}</span>
    </div>
  );
}
