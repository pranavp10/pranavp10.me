import Card from '@/components/libraries/Card';
import {
  DocumentationData,
  CssInJsData,
  FetchersData,
  FrameworkData,
  NotesData,
  ReactDataFetchingData,
  StateManagementData,
  UiLibraryData,
  UtilityData,
} from '@/data/libraries';
import ListContainer from './ListContainer';

const ListOfLibraries = [
  { name: 'CSS in JS', list: CssInJsData },
  { name: 'Document Each Component', list: DocumentationData },
  { name: 'Fetchers', list: FetchersData },
  { name: 'Framework', list: FrameworkData },
  { name: 'Note It down', list: NotesData },
  { name: 'Data Fetching Hooks', list: ReactDataFetchingData },
  { name: 'State Management', list: StateManagementData },
  { name: 'UI Library', list: UiLibraryData },
  { name: 'Utility', list: UtilityData },
];

const Libraries = () => (
  <div className="flex flex-wrap flex-col">
    {ListOfLibraries.map((data, i) => (
      <ListContainer heading={data.name} key={`${i}${i}${i}`}>
        {data.list.map((list, index) => (
          <Card {...list} key={index} />
        ))}
      </ListContainer>
    ))}
  </div>
);
export default Libraries;
