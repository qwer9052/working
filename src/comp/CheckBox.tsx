type checkbox = {
  disabled: boolean;
  children: any;
  checked: boolean;
  onChange: Function;
};

function Checkbox(props: checkbox) {
  return (
    <label>
      <input type='checkbox' disabled={props.disabled} checked={props.checked} onChange={({ target: { checked } }) => props.onChange(checked)} />
      {props.children}
    </label>
  );
}

export function CheckboxLeft(props: checkbox) {
  return (
    <label>
      {props.children}
      <input type='checkbox' disabled={props.disabled} checked={props.checked} onChange={({ target: { checked } }) => props.onChange(checked)} />
    </label>
  );
}

export default Checkbox;
