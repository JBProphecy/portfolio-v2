
export function SlideDeckOuter({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        overflowX: "hidden",
        overflowY: "auto",
        justifyContent: "center"
      }}
    >
      {children}
    </div>
  )
}

export function SlideDeckInner({ children }: { children?: React.ReactNode }) {
  return (
    <div
      style={{
        width: "max-content",
        height: "max-content",
        display: "flex",
        flexDirection: "column",
        padding: "2rem",
        gap: "2rem"
      }}
    >
      {children}
    </div>
  )
}