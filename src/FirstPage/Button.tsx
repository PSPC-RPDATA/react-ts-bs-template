import { useFirstPageState } from "./state";

export default function Button() {
  const { activateModal } = useFirstPageState();
  return (
    <button className="btn btn-primary" onClick={activateModal}>
      Open modal
    </button>
  );
}
