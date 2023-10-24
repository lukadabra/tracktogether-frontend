interface ContainerProps {
  children?: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <div {...props} className={`p-4 min-h-screen mx-auto`}>
      {children}
    </div>
  );
};