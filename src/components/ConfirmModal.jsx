import React from "react";
import "./ConfirmModal.css";

function ConfirmModal({ taskIdToDelete, onCancel, onConfirm }) {
  const task = taskIdToDelete[0];
  return (
    <div className="confirm-modal">
      <div className="container">
        <div className="alert">
          <span>⚠️</span>
        </div>
        <h2>Confirmer la suppression</h2>
        <p>Êtes-vous sûr de vouloir supprimer cette tâche ?</p>
        <label>"{task.name}"</label>
        <div className="btn-container">
          <button type="button" data-choice={false} onClick={() => onCancel()}>
            Annuler
          </button>
          <button
            type="button"
            data-choice={true}
            onClick={() => onConfirm(task.id)}
            className="btn-delete"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
