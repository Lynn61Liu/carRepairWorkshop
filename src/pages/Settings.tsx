export default function Settings() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold text-slate-900">Settings</h1>

      <div className="rounded-2xl border border-slate-200 bg-white p-4">
        <div className="space-y-3">
          <label className="block">
            <div className="text-sm text-slate-600">Display name</div>
            <input
              className="mt-1 h-9 w-full rounded-xl border border-slate-200 px-3 text-sm outline-none focus:border-slate-400"
              placeholder="Yin Liu"
            />
          </label>

          <button className="rounded-xl bg-slate-900 px-4 py-2 text-sm text-white hover:bg-slate-800">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
