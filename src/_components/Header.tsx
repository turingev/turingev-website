export default ({ ...props }) => (
  <>
    <header class="bg-white relative">
      <nav class="container mx-auto flex justify-between items-center py-1">
        <a class="flex items-center" href="/">
          <img
            src="/Turing_eV_RGB_Logo_mit_Text_Farbe.svg"
            alt="logo"
            class="mx-3 h-16"
          />
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
