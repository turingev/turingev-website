export default ({ title, children, date, ...props }) => (
  <props.comp.Base title={title} {...props}>
    <div class="container mx-auto">
      <div class="flex m-4">
        <div class="card w-full p-4">
          <section class="markdown">
            {children}
          </section>
        </div>
      </div>
    </div>
  </props.comp.Base>
);
