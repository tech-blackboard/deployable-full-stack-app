// import React, { useEffect, useRef, useState } from "react";

// /*
//   Minimal ProjectView for testing DnD (ghost + placeholder).
//   - Start the app and open the route with this component.
//   - It starts with 2 lists and a couple of cards.
//   - Drag a card between lists.
// */

// export default function ProjectViewMinimal() {
//   const [lists, setLists] = useState([
//     { id: 1, name: "Todo" },
//     { id: 2, name: "Doing" }
//   ]);
//   const [cardsByList, setCardsByList] = useState({
//     1: [{ id: 111, cardName: "Task A" }, { id: 112, cardName: "Task B" }],
//     2: [{ id: 221, cardName: "Task X" }]
//   });

//   // persistent drag state
//   const dragState = useRef({
//     tracking: false,
//     dragging: false,
//     cardId: null,
//     cardObj: null,
//     srcListId: null,
//     srcIndex: null,
//     cardRect: null,
//     pointerOffset: { x: 0, y: 0 },
//     ghostEl: null,
//     placeholderEl: null,
//     originNode: null,
//     suppressClick: false
//   }).current;

//   useEffect(() => {
//     // cleanup on unmount
//     return () => {
//       document.removeEventListener("pointermove", onPointerMove);
//       document.removeEventListener("pointerup", onPointerUp);
//       if (dragState.ghostEl) dragState.ghostEl.remove();
//       if (dragState.placeholderEl) dragState.placeholderEl.remove();
//     };
//     // eslint-disable-next-line
//   }, []);

//   function handlePointerDown(cardId, listId, e) {
//     e.preventDefault();
//     const cardEl = e.currentTarget;
//     const rect = cardEl.getBoundingClientRect();
//     const listCards = cardsByList[listId] || [];
//     const idx = listCards.findIndex(c => c.id === cardId);
//     const cardObj = listCards[idx];

//     dragState.tracking = true;
//     dragState.dragging = false;
//     dragState.cardId = cardId;
//     dragState.cardObj = cardObj;
//     dragState.srcListId = listId;
//     dragState.srcIndex = idx;
//     dragState.cardRect = rect;
//     dragState.pointerOffset = { x: e.clientX - rect.left, y: e.clientY - rect.top };
//     dragState.originNode = cardEl;
//     dragState.suppressClick = false;

//     document.addEventListener("pointermove", onPointerMove);
//     document.addEventListener("pointerup", onPointerUp);
//     console.log("pointerdown:", cardObj.cardName, "from list", listId);
//   }

//   function onPointerMove(e) {
//     if (!dragState.tracking) return;
//     if (!dragState.dragging) {
//       const dx = Math.abs(e.clientX - (dragState.cardRect?.left || 0));
//       const dy = Math.abs(e.clientY - (dragState.cardRect?.top || 0));
//       if (dx < 5 && dy < 5) return;
//       dragState.dragging = true;
//       startDrag();
//       if (dragState.originNode) dragState.originNode.style.visibility = "hidden";
//       dragState.suppressClick = true;
//       setTimeout(() => (dragState.suppressClick = false), 0);
//       console.log("drag started");
//     }
//     moveGhost(e);
//     updatePlaceholder(e);
//   }

//   function onPointerUp() {
//     if (!dragState.tracking) return;
//     if (dragState.dragging) finalizeDrop();
//     cleanupAfterDrag();
//     console.log("pointerup - cleanup done");
//   }

//   function startDrag() {
//     createGhost();
//     createPlaceholder();
//   }
//   function createGhost() {
//     const r = dragState.cardRect;
//     if (!r) return;
//     const g = document.createElement("div");
//     g.style.position = "fixed";
//     g.style.left = r.left + "px";
//     g.style.top = r.top + "px";
//     g.style.width = r.width + "px";
//     g.style.padding = "8px";
//     g.style.background = "#e6f0ff";
//     g.style.borderRadius = "6px";
//     g.style.boxShadow = "0 6px 18px rgba(0,0,0,0.15)";
//     g.style.zIndex = 99999;
//     g.style.pointerEvents = "none";
//     g.textContent = dragState.cardObj.cardName;
//     document.body.appendChild(g);
//     dragState.ghostEl = g;
//   }
//   function moveGhost(e) {
//     if (!dragState.ghostEl) return;
//     dragState.ghostEl.style.left = (e.clientX - dragState.pointerOffset.x) + "px";
//     dragState.ghostEl.style.top = (e.clientY - dragState.pointerOffset.y) + "px";
//   }
//   function removeGhost() {
//     if (dragState.ghostEl) {
//       dragState.ghostEl.remove();
//       dragState.ghostEl = null;
//     }
//   }
//   function createPlaceholder() {
//     const p = document.createElement("div");
//     p.style.height = (dragState.cardRect?.height || 48) + "px";
//     p.style.border = "2px dashed #0077ff";
//     p.style.margin = "6px 0";
//     p.style.borderRadius = "6px";
//     dragState.placeholderEl = p;
//   }
//   function updatePlaceholder(e) {
//     const listEls = document.querySelectorAll("[data-list-id]");
//     for (const listEl of listEls) {
//       const rect = listEl.getBoundingClientRect();
//       if (e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom) {
//         const cards = Array.from(listEl.querySelectorAll("[data-card-id]"));
//         if (cards.length === 0) {
//           if (dragState.placeholderEl.parentElement !== listEl) listEl.appendChild(dragState.placeholderEl);
//           return;
//         }
//         let placed = false;
//         for (const cardEl of cards) {
//           const r = cardEl.getBoundingClientRect();
//           if (e.clientY < r.top + r.height/2) {
//             cardEl.parentElement.insertBefore(dragState.placeholderEl, cardEl);
//             placed = true;
//             break;
//           }
//         }
//         if (!placed) listEl.appendChild(dragState.placeholderEl);
//         return;
//       }
//     }
//   }
//   function removePlaceholder() {
//     if (dragState.placeholderEl && dragState.placeholderEl.parentElement) {
//       dragState.placeholderEl.remove();
//       dragState.placeholderEl = null;
//     }
//   }

//   function finalizeDrop() {
//     const p = dragState.placeholderEl;
//     if (!p || !p.parentElement) return;
//     const targetListId = Number(p.parentElement.getAttribute("data-list-id"));
//     // compute index by counting preceding card nodes with data-card-id
//     let idx = 0;
//     for (const child of Array.from(p.parentElement.children)) {
//       if (child === p) break;
//       if ((child).hasAttribute && (child).hasAttribute("data-card-id")) idx++;
//     }

//     const cardObj = dragState.cardObj;
//     const src = dragState.srcListId;
//     setCardsByList(prev => {
//       const copy = {...prev};
//       copy[src] = (copy[src] || []).filter(c => c.id !== cardObj.id);
//       const arr = [...(copy[targetListId] || [])];
//       arr.splice(idx, 0, cardObj);
//       copy[targetListId] = arr;
//       return copy;
//     });
//   }

//   function cleanupAfterDrag() {
//     if (dragState.originNode) dragState.originNode.style.visibility = "";
//     removeGhost();
//     removePlaceholder();
//     document.removeEventListener("pointermove", onPointerMove);
//     document.removeEventListener("pointerup", onPointerUp);
//     dragState.tracking = false;
//     dragState.dragging = false;
//     dragState.cardId = null;
//     dragState.cardObj = null;
//     dragState.srcListId = null;
//     dragState.srcIndex = null;
//     dragState.cardRect = null;
//     dragState.pointerOffset = {x:0,y:0};
//     dragState.originNode = null;
//   }

//   // RENDER
//   return (
//     <div style={{padding:20}}>
//       <h2>Minimal DnD Test</h2>
//       <div style={{display:"flex", gap:20}}>
//         {lists.map(l => (
//           <div key={l.id} data-list-id={l.id} style={{width:240, minHeight:200, padding:8, background:"#f3f4f6", borderRadius:6}}>
//             <h4>{l.name}</h4>
//             <div>
//               {(cardsByList[l.id] || []).map(c => (
//                 <div key={c.id} data-card-id={c.id} style={{marginBottom:8}}>
//                   <div
//                     onPointerDown={(e) => handlePointerDown(c.id, l.id, e)}
//                     style={{background:"#fff", padding:10, borderRadius:6, boxShadow:"0 2px 6px rgba(0,0,0,0.06)", cursor:"grab"}}
//                   >
//                     {c.cardName}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//       <p style={{marginTop:12, color:"#666"}}>Drag a card after pressing and moving slightly.</p>
//     </div>
//   );
// }
