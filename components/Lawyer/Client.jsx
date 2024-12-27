"use client";
import React from "react";

const Client = () => {
  return (
    <div className='h-full'>
      <div class="flex flex-col h-full lg:flex-row gap-6 p-6">
  <div class="bg-card p-4 rounded-lg shadow-md w-full lg:w-1/4">
    <h2 class="text-lg font-semibold text-card-foreground mb-4">Filters</h2>
    <div class="mb-4">
      <h3 class="text-md font-medium text-card-foreground">Status</h3>
      <div class="flex flex-col space-y-2">
        <label class="flex items-center space-x-2">
          <input type="checkbox" class="form-checkbox text-primary" />
          <span class="text-foreground">Open</span>
        </label>
        <label class="flex items-center space-x-2">
          <input type="checkbox" class="form-checkbox text-primary" />
          <span class="text-foreground">Escalated</span>
        </label>
        <label class="flex items-center space-x-2">
          <input type="checkbox" class="form-checkbox text-primary" />
          <span class="text-foreground">Resolved</span>
        </label>
        <label class="flex items-center space-x-2">
          <input type="checkbox" class="form-checkbox text-primary" />
          <span class="text-foreground">Closed</span>
        </label>
      </div>
    </div>
    <div class="mb-4">
      <h3 class="text-md font-medium text-card-foreground">Priority</h3>
      <div class="flex flex-col space-y-2">
        <label class="flex items-center space-x-2">
          <input type="checkbox" class="form-checkbox text-primary" />
          <span class="text-foreground">Low</span>
        </label>
        <label class="flex items-center space-x-2">
          <input type="checkbox" class="form-checkbox text-primary" />
          <span class="text-foreground">Medium</span>
        </label>
        <label class="flex items-center space-x-2">
          <input type="checkbox" class="form-checkbox text-primary" />
          <span class="text-foreground">High</span>
        </label>
      </div>
    </div>
    <div>
      <h3 class="text-md font-medium text-card-foreground">Category</h3>
      <div class="flex flex-col space-y-2">
        <label class="flex items-center space-x-2">
          <input type="checkbox" class="form-checkbox text-primary" />
          <span class="text-foreground">Product</span>
        </label>
        <label class="flex items-center space-x-2">
          <input type="checkbox" class="form-checkbox text-primary" />
          <span class="text-foreground">Billing</span>
        </label>
        <label class="flex items-center space-x-2">
          <input type="checkbox" class="form-checkbox text-primary" />
          <span class="text-foreground">Account</span>
        </label>
        <label class="flex items-center space-x-2">
          <input type="checkbox" class="form-checkbox text-primary" />
          <span class="text-foreground">Shipping</span>
        </label>
      </div>
    </div>
  </div>

  <div class="bg-card p-4 rounded-lg shadow-md w-full lg:w-3/4">
    <h2 class="text-lg font-semibold text-card-foreground mb-4">Open Cases</h2>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-card">
        <thead>
          <tr>
            <th class="px-6 py-3 border-b-2 border-zinc-300 text-left text-sm font-semibold text-card-foreground">Customer</th>
            <th class="px-6 py-3 border-b-2 border-zinc-300 text-left text-sm font-semibold text-card-foreground">Title</th>
            <th class="px-6 py-3 border-b-2 border-zinc-300 text-left text-sm font-semibold text-card-foreground">Status</th>
            <th class="px-6 py-3 border-b-2 border-zinc-300 text-left text-sm font-semibold text-card-foreground">Priority</th>
            <th class="px-6 py-3 border-b-2 border-zinc-300 text-left text-sm font-semibold text-card-foreground">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white">
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">John Doe</td>
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">Faulty Product Replacement</td>
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">
              <span class="bg-primary text-primary-foreground rounded-full px-2 py-1 text-xs font-semibold">Open</span>
            </td>
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">
              <span class="bg-destructive text-destructive-foreground rounded-full px-2 py-1 text-xs font-semibold">High</span>
            </td>
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">
              <button class="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full w-6 h-6"></button>
            </td>
          </tr>
          <tr class="bg-zinc-50">
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">Jane Smith</td>
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">Billing Issue</td>
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">
              <span class="bg-primary text-primary-foreground rounded-full px-2 py-1 text-xs font-semibold">Open</span>
            </td>
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">
              <span class="bg-accent text-accent-foreground rounded-full px-2 py-1 text-xs font-semibold">Medium</span>
            </td>
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">
              <button class="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full w-6 h-6"></button>
            </td>
          </tr>
          <tr class="bg-white">
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">Michael Johnson</td>
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">Account Suspension</td>
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">
              <span class="bg-destructive text-destructive-foreground rounded-full px-2 py-1 text-xs font-semibold">Escalated</span>
            </td>
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">
              <span class="bg-destructive text-destructive-foreground rounded-full px-2 py-1 text-xs font-semibold">High</span>
            </td>
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">
              <button class="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full w-6 h-6"></button>
            </td>
          </tr>
          <tr class="bg-zinc-50">
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">Sarah Lee</td>
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">Delivery Delay</td>
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">
              <span class="bg-muted text-muted-foreground rounded-full px-2 py-1 text-xs font-semibold">Closed</span>
            </td>
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">
              <span class="bg-accent text-accent-foreground rounded-full px-2 py-1 text-xs font-semibold">Medium</span>
            </td>
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">
              <button class="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full w-6 h-6"></button>
            </td>
          </tr>
          <tr class="bg-white">
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">David Kim</td>
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">Product Refund</td>
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">
              <span class="bg-muted text-muted-foreground rounded-full px-2 py-1 text-xs font-semibold">Resolved</span>
            </td>
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">
              <span class="bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-xs font-semibold">Low</span>
            </td>
            <td class="px-6 py-4 border-b border-zinc-300 text-sm text-foreground">
              <button class="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-full w-6 h-6"></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</div>
    </div>
  )
}

export default Client
