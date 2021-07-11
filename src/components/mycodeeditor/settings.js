const Settings = () => (
  <>
    <div className="flex items-center mt-4">
      <div>
        <h6 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-4 text-black dark:text-white flex items-center">
          VS Code JSON settings
        </h6>
        <ul className="text-md text-gray-600 mb-2 dark:text-gray-100 list-decimal ml-5">
          <li>Download the Operator Mono font and Installed</li>
          <li>Download and Installed Settings Sync extension in you VS Code</li>
          <li>Open a Drop down by pressing Ctrl + Shift + p</li>
          <li>Type Open Settings (JSON) and select the Drop option</li>
          <li>Copy past the whole below JSON file and save it</li>
          <li>Open a Drop down by pressing Ctrl + Shift + p</li>
          <li>Type sync: Download Settings and select the Drop option</li>
          <li>After download is done restart the vs code</li>
          <li>You will see the Changes 😎</li>
        </ul>
      </div>
    </div>
  </>
);

export default Settings;
