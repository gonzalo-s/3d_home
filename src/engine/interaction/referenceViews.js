import roomReferences from '../../data/room-reference-views.json';

// Keep room view switching separate from the legacy kitchen/source-image logic.
export function showRoomReferenceViews(reference, { panel, buttons, image, title, note }) {
  const room = roomReferences.find((entry) => entry.photoIndex === reference.photo);
  if (!room) return false;

  buttons.replaceChildren();
  function select(view) {
    image.src = encodeURI(view.image);
    image.alt = `${reference.title} · ${view.label}`;
    note.textContent = view.kind === 'plan'
      ? 'Planta CAD generada a partir del modelo 3D · representación esquemática, sin escala'
      : 'Dibujo CAD de referencia · proporciones aproximadas, sin escala';
    for (const button of buttons.children) {
      button.setAttribute('aria-pressed', String(button.dataset.view === view.kind));
    }
  }
  for (const view of room.views) {
    const button = buttons.ownerDocument.createElement('button');
    button.type = 'button';
    button.textContent = view.label;
    button.dataset.view = view.kind;
    button.onclick = () => select(view);
    buttons.append(button);
  }
  title.textContent = reference.title;
  select(room.views[0]);
  panel.hidden = false;
  return true;
}
