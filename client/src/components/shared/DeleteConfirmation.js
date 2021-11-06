import { Button } from "reactstrap";

export function DeleteConfirmation(props) {
  const { onConfirm, onDelete } = props;

  return (
    <div>
      <h5>Are you sure ?</h5>
      <Button color="success" onClick={onDelete}>
        Yes
      </Button>
      <Button color="danger" style={{ marginLeft: 10 }} onClick={onConfirm}>
        No
      </Button>
    </div>
  );
}
