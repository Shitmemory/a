import { Copy01, DownloadCloud02, Edit01, Trash01 } from "@untitledui/icons";
import { ButtonUtility } from "@/components/base/buttons/button-utility";

export const UtilityButtonDefaultDemo = () => {
  return (
    <div className="flex items-start gap-1">
      <ButtonUtility size="sm" color="tertiary" tooltip="Copy" icon={Copy01} />
      <ButtonUtility
        size="sm"
        color="tertiary"
        tooltip="Download"
        icon={DownloadCloud02}
      />
      <ButtonUtility
        size="sm"
        color="tertiary"
        tooltip="Delete"
        icon={Trash01}
      />
      <ButtonUtility size="sm" color="tertiary" tooltip="Edit" icon={Edit01} />
    </div>
  );
};
