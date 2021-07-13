import { RoughNotation } from 'react-rough-notation';

const Settings = () => (
  <>
    <div className="flex items-center mt-4">
      <div>
        <h6 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-4 text-black dark:text-white flex items-center">
          How to use the vs code JSON settings
        </h6>
        <ul className="text-md text-gray-600 mb-2 dark:text-gray-100 list-decimal ml-5">
          <li>
            Download the{' '}
            <RoughNotation type="highlight" show color="#91a7ef">
              <a href="OperatorMono-BookItalic.otf" download>
                <b>Operator Mono</b>
              </a>
            </RoughNotation>{' '}
            font and Installed
          </li>
          <li>
            Download and Installed{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync">
              <RoughNotation type="highlight" show color="#91a7ef">
                <b>Settings Sync</b>
              </RoughNotation>
            </a>{' '}
            extension in you VS Code
          </li>
          <li>
            Open a Drop down by pressing{' '}
            <span className="bg-gray-200 rounded-md p-1">Ctrl + Shift + p </span>
          </li>
          <li>
            Type <span className="bg-gray-200 rounded-md p-1">Open Settings (JSON)</span>
            and select the Drop option
          </li>
          <li>Copy past the whole below JSON file and save it</li>
          <li>
            Open a Drop down by pressing{' '}
            <span className="bg-gray-200 rounded-md p-1">Ctrl + Shift + p </span>
          </li>
          <li>
            Type
            <span className="bg-gray-200 rounded-md p-1">sync: Download Settings</span>
            and select the Drop option
          </li>
          <li>After download is done restart the vs code</li>
          <li>You will see the Changes 😎</li>
        </ul>
      </div>
    </div>
  </>
);

export default Settings;
