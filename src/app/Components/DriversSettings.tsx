"use client"
import { ChevronDown, ChevronUp, X, Plus, PlusCircle } from "lucide-react";
import { useState } from "react";

export default function DriversSettings() {
  const [workHoursOpen, setWorkHoursOpen] = useState(true);
  const [documentOpen, setDocumentOpen] = useState(false);
  const [timeFrequency, setTimeFrequency] = useState("Daily");
  const [maxHours, setMaxHours] = useState("8");
  const [breakMinutes, setBreakMinutes] = useState("0");
  const [docType, setDocType] = useState("");
  const [isEnabled, setIsEnabled] = useState(true);
  const [notificationDays, setNotificationDays] = useState("2");
  const [needExpiration, setNeedExpiration] = useState(true);
  const [isRequired, setIsRequired] = useState(true);
  const [deleteAfter, setDeleteAfter] = useState("0");
  const [retentionTitle, setRetentionTitle] = useState("Title (Low Risk, Medium Risk, etc.)");

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Driver Settings</h1>
          <p className="text-sm text-gray-500 mt-1">Driver user settings</p>
        </div>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
          Save changes
        </button>
      </div>

      {/* Work Hours Section */}
      <div className="bg-white rounded-lg border mb-4">
        <button
          onClick={() => setWorkHoursOpen(!workHoursOpen)}
          className="w-full flex items-center justify-between px-6 py-4 text-left"
        >
          <span className="text-base font-medium text-gray-900">Work Hours</span>
          {workHoursOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {workHoursOpen && (
          <div className="px-6 pb-6 border-t">
            <div className="pt-6 space-y-6">
              {/* Time Frequency */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-500" />
                  <label className="text-sm text-gray-700">Time Frequency</label>
                </div>
                <select
                  value={timeFrequency}
                  onChange={(e) => setTimeFrequency(e.target.value)}
                  className="w-80 px-3 py-2 bg-gray-50 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Daily</option>
                  <option>Weekly</option>
                  <option>Monthly</option>
                </select>
              </div>

              {/* Max Hours Per Frequency */}
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700">Max Hours Per Frequency</label>
                <input
                  type="number"
                  value={maxHours}
                  onChange={(e) => setMaxHours(e.target.value)}
                  className="w-80 px-3 py-2 bg-gray-50 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Mandatory Break Minutes */}
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700">Mandatory Break Minutes</label>
                <input
                  type="number"
                  value={breakMinutes}
                  onChange={(e) => setBreakMinutes(e.target.value)}
                  className="w-80 px-3 py-2 bg-gray-50 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Add Rule Button */}
              <div className="flex justify-end">
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
                  <PlusCircle className="w-4 h-4" />
                  Add Rule
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Document Management Settings Section */}
      <div className="bg-white rounded-lg border">
        <button
          onClick={() => setDocumentOpen(!documentOpen)}
          className="w-full flex items-center justify-between px-6 py-4 text-left"
        >
          <span className="text-base font-medium text-gray-900">Document Management Settings</span>
          {documentOpen ? <ChevronUp className="w-5 h-5 text-gray-500" /> : <ChevronDown className="w-5 h-5 text-gray-500" />}
        </button>

        {documentOpen && (
          <div className="px-6 pb-6 border-t">
            <div className="pt-6 space-y-6">
              {/* Document Type */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-500" />
                  <label className="text-sm text-gray-700">Document Type</label>
                </div>
                <input
                  type="text"
                  value={docType}
                  onChange={(e) => setDocType(e.target.value)}
                  placeholder="Enter type"
                  className="w-80 px-3 py-2 bg-gray-50 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* is Enabled */}
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700">is Enabled</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isEnabled}
                    onChange={(e) => setIsEnabled(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              {/* Notification Days Before Expiry */}
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700">Notification Days Before Expiry</label>
                <input
                  type="number"
                  value={notificationDays}
                  onChange={(e) => setNotificationDays(e.target.value)}
                  className="w-80 px-3 py-2 bg-gray-50 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Need Expiration Date */}
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700">Need Expiration Date</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={needExpiration}
                    onChange={(e) => setNeedExpiration(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              {/* is Required */}
              <div className="flex items-center justify-between">
                <label className="text-sm text-gray-700">is Required</label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isRequired}
                    onChange={(e) => setIsRequired(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-blue-600"></div>
                </label>
              </div>

              {/* Retention Policy */}
              <div className="flex items-start justify-between gap-4">
                <label className="text-sm text-gray-700 pt-2">Retention Policy</label>
                <div className="flex items-center gap-2 flex-1 max-w-[320px]">
                  <span className="text-sm text-gray-500">Delete After</span>
                  <input
                    type="number"
                    value={deleteAfter}
                    onChange={(e) => setDeleteAfter(e.target.value)}
                    className="w-20 px-3 py-2 bg-gray-50 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    value={retentionTitle}
                    onChange={(e) => setRetentionTitle(e.target.value)}
                    className="flex-1 px-3 py-2 bg-gray-50 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Add another Option */}
              <div className="flex justify-start">
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
                  <PlusCircle className="w-4 h-4" />
                  Add another Option
                </button>
              </div>

              {/* Add Document Button */}
              <div className="flex justify-end pt-4">
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium">
                  <PlusCircle className="w-4 h-4" />
                  Add Document
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}