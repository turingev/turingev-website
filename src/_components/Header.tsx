export default ({ ...props }) => (
  <>
    <header class="bg-white relative">
      <nav class="container mx-auto py-2 flex px-4 justify-between items-center">
        <a class="flex items-center" href="/">
          <img src="/logo-300x60.webp" alt="logo" class="mx-3 h-14 py-3" />
        </a>
      </nav>
    </header>

    <div class="sticky top-0 backdrop-blur bg-primary/80 dark:bg-primary-dark/75">
      <div class="container overflow-auto mx-auto px-4">
        <nav class="flex w-max">
          <ul class="flex text-white font-normal">
            <props.comp.HeaderMenuItems {...props} />
          </ul>
        </nav>
      </div>
    </div>
  </>
);
