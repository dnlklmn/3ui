import ThemeSwitch from "./components/ThemeSwitch";

export default function App() {
  return (
    <div className="h-screen bg-background-default">
      <div className="w-1/4 p-24">
        <div className="flex flex-col gap-6 p-6 rounded-md bg-background-float shadow-idle">
          <span className="font-semibold font-unbounded text-h5 text-foreground-contrast">
            An Example Card
          </span>
          <span className="font-semibold font-inter text-body_2 text-foreground-contrast">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            porttitor erat sed nisi egestas, vitae vulputate nisi egestas.
            Maecenas elementum blandit ante vel sagittis.
          </span>
          <ThemeSwitch />
        </div>
      </div>
    </div>
  );
}
